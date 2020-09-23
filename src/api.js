import axios from 'axios/index';

export const getGameScheduleApi = async (gameType) => {
    try {
        const result = await axios.get(`https://www.atg.se/services/racinginfo/v1/api/products/${gameType}`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};

export const getGameDataApi = async (gameId) => {
    try {
        const result = await axios.get(`https://www.atg.se/services/racinginfo/v1/api/games/${gameId}`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};