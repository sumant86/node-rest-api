import { userRepository } from '../repositoties';

function getUser(id) {
    return userRepository.getUser(id);
}

function getUsers() {
    return userRepository.getUsers();
}

export const userService = {
    getUser,
    getUsers,
};
