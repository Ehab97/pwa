//install event for service workers
self.addEventListener('install', (event) => {
    console.log('Servecie Has been installed');
});

//activate event
self.addEventListener('activate', (avt) => {
    console.log('service workers has been activate');
});

//fetch event
self.addEventListener('fetch', (event) => {
    console.log('Fetch Event :', event);
});