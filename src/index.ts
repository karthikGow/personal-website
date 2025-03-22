import express from 'express';
import path from 'path';
import { Admin } from './cms/admin';

const app = express();
const port = 3000;

// Initialize CMS
const admin = new Admin();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Basic route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// CMS Routes
app.post('/api/content', (req, res) => {
    const { title, body } = req.body;
    const content = admin.createContent(title, body);
    res.json(content);
});

app.put('/api/content/:id', (req, res) => {
    const { id } = req.params;
    const { title, body } = req.body;
    const content = admin.updateContent(parseInt(id), title, body);
    res.json(content);
});

app.delete('/api/content/:id', (req, res) => {
    const { id } = req.params;
    const success = admin.deleteContent(parseInt(id));
    res.json({ success });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('CMS initialized');
});