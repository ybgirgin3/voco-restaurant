import express from 'express';

import router from './controllers/index';

// router.get<{}, MessageResponse>('/', (req, res) => {
//   res.json({
//     message: `Main Routes: ['/restaurants', \n`,
//   });
// });

// router.get<{}, MessageResponse>('/restaurants', (req, res) => {
//   res.json({
//     message: 'All Restaurants here!!',
//   });
// });

// router.get<{}, MessageResponse>('/menu', (req, res) => {
//   res.json({
//     message: 'All Restaurants here!!',
//   });
// });

export default router;
