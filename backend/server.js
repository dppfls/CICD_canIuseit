//서버 실행

require('dotenv').config();
const app = require('./app'); // Express 앱 가져오기
const sequelize = require('./config/database');

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        // 데이터베이스 연결 확인
        await sequelize.authenticate();
        console.log('✅ Database connected successfully.');
        
        // 서버 시작
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`🚀 Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('❌ Unable to connect to the database:', error);
    }
};

startServer();