import Alpine from 'alpinejs';
import getUsers from './alpine/users';
 
window.Alpine = Alpine;
window.getUsers = getUsers;
 
Alpine.start();