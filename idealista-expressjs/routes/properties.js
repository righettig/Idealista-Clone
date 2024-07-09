const express = require('express');
const router = express.Router();

const sampleProperties = [
    {
        id: 1,
        image: 'https://img4.idealista.it/blur/WEB_LISTING-M/0/id.pro.it.image.master/b8/cf/e5/566791792.webp',
        title: 'Casa indipendente in vendita in strada Provinciale 21 s.n.c',
        address: 'Licciana Nardi',
        price: '495.000 €',
        description: "Settimo Cielo si trova nel nord della Toscana, in una zona conosciuta come Lunigiana. Una bella proprietà con cancello in ferro, ampia proprietà costruita in una posizione elevata in cima alla cresta, Torre di Monte Vignale. Settimo Cielo gode di una vista a 360 gradi, l'essere più spettacolare dei Monti Apuani."
    },
    {
        id: 2,
        image: 'https://img4.idealista.it/blur/WEB_LISTING-M/0/id.pro.it.image.master/26/83/8d/619177639.webp',
        title: 'Villa in vendita in strada Provinciale 14 s.n.c',
        address: 'Podenzana',
        price: '490.000 €',
        description: "STUDIOAREA AULLA cell. 329/0733879 propone in vendita a Podenzana a pochi minuti dal centro di Aulla, splendida Villa ristrutturata con finiture di pregio di circa 360 mq commerciali."
    },
    {
        id: 3,
        image: 'https://img4.idealista.it/blur/WEB_LISTING-M/0/id.pro.it.image.master/18/4c/aa/543980265.webp',
        title: 'Villa in vendita in via del Casale s.n.c',
        address: 'Licciana Nardi',
        price: '490.000 €',
        description: "STUDIOAREA AULLA per info e contatti 329/0733879 Propone in vendita Bella Villa indipendente di 300 mq con garage doppio con apertura motorizzata e cantine, la villa è ottimamente esposta, sulla collina di Costamala, in posizione riservata a 4 km dal casello autostradale di Aulla e ad 1 Km da tutti i servizi, a 20 km dal mare e dalla montagna."
    }
];

router.get('/', (req, res) => {
    res.json(sampleProperties);
});

router.post('/', (req, res) => {
    const newProperty = req.body;
    newProperty.id = sampleProperties.length ? sampleProperties[sampleProperties.length - 1].id + 1 : 1;
    sampleProperties.push(newProperty);
    res.status(201).json(newProperty);
});

module.exports = router;
