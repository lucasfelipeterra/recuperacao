import e from 'express';
import expedition_router from './routes/expedition-routes.js';
import explore_router from './routes/explore-routes.js';
import species_router from './routes/species-routes.js';

const app = e();

app.use(e.json());

app.use('/expedition', expedition_router);
app.use('/explore', explore_router);
app.use('/species', species_router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
