/*
 * Combined Service Worker for Two Tons of Fun
 * Handles both PWA caching AND OneSignal push notifications
 */

// Import OneSignal's service worker
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

const CACHE_NAME = 'ttof-cache-v2';
const urlsToCache = [
    '/',
    '/index.html',
    '/TTOF-main-logo.png',
    '/app-icon-192.png',
    '/app-icon-512.png',
    '/manifest.json'
];

// Install event - cache files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache opened');
                return cache.addAll(urlsToCache).catch(err => {
                    console.log('Cache addAll error (non-fatal):', err);
                });
            })
    );
    self.skipWaiting();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
    // Skip non-GET requests and OneSignal requests
    if (event.request.method !== 'GET') return;
    if (event.request.url.includes('onesignal')) return;
    
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request)
                    .then(response => {
                        // Don't cache non-success responses
                        if (!response || response.status !== 200) {
                            return response;
                        }
                        // Clone and cache
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        return response;
                    })
                    .catch(() => {
                        // Offline fallback for navigation
                        if (event.request.mode === 'navigate') {
                            return caches.match('/index.html');
                        }
                    });
            })
    );
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});
