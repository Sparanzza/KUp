import { User } from './User';

enum Level  {
    BEGINNER = 'BEGINNER',
    NORMAL = 'NORMAL',
    DIFICULT = 'DIFICULT',
    EXPERT = 'EXPERT',
}

enum BoxState {
    NOSELECTED,
    SELECTED,
    ACTIVEHOME,
    ACTIVEAWAY
}

export class Game {
    level: Level;
    user: User;
}
