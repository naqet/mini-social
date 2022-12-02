import dotenv from 'dotenv';
import express from 'express';
import logger from './utils/logger';

dotenv.config();

const app = express();

app.listen(process.env.PORT || 3001, () => {
	logger.info(`App is running on port ${process.env.PORT || 3001}`);
});
