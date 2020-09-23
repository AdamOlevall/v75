import { useAsync } from "react-async";
import { lastToFirst, firstToLast } from "../utils/helpers"
import { getGameScheduleApi, getGameDataApi } from "../api";

const getGameSchedule = async([gameType, cb]) => {
    const gameSchedule = await getGameScheduleApi(gameType);
    let closestGame;
    if (gameSchedule.upcoming.length > 0) {
        [closestGame] = gameSchedule.upcoming.sort(firstToLast);
    } else if (gameSchedule.results.length > 0) {
        [closestGame] = gameSchedule.results.sort(lastToFirst);
    };
    const gameData = await getGameDataApi(closestGame.id);
    cb(gameData);
}

const useGetGameSchedule = () => {
    const { run } = useAsync({ deferFn: getGameSchedule});
    return (gameType, cb) => run(gameType, cb);
}

export default useGetGameSchedule;