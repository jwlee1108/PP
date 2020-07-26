import Button from './components/component.button';

const a = new Button('default', 'HI', { size: 'md', startIcon: 'local_grocery_store' });

const app = document.getElementById('app');
app.appendChild(a.el);
