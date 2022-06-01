import ApiService from '../../../services/api-service';
import { Crudentials, TemporaryUser, User } from '../../../types';

export type AuthPromise = (crudential: Crudentials) => Promise<User>;

export const login: AuthPromise = async ({ email, password }: Crudentials) => {
  const { data: tempUsers } = await ApiService.get<TemporaryUser[]>(`/users?email=${email}`);
  if (tempUsers.length === 0) {
    throw new Error('User with such email was not found');
  }

  const [tempUser] = tempUsers;

  if (tempUser.password !== password) {
    throw new Error('Passwords do not match');
  }
  return {
    id: tempUser.id,
    name: tempUser.name,
    surname: tempUser.surname,
    email: tempUser.email,
    img: tempUser.img,
  };
};

export const register: AuthPromise = async ({ email, password }: Crudentials) => {
  const { data: tempUsers } = await ApiService.get<TemporaryUser[]>('/users');

  const userExists = tempUsers.map((x) => x.email).includes(email);
  if (userExists) {
    throw new Error('Toks vartotojas jau egzistuoja. Pasirinkite kitą el. paštą');
  }

  const { data: createdTempUser } = await ApiService.post('/users', { email, password });

  const createdUser: User = {
    id: createdTempUser.id,
    email: createdTempUser.email,
  };

  return createdUser;
};

export const checkEmailAvailability = async (email: string): Promise<boolean> => {
  const { data: tempUsers } = await ApiService.get<TemporaryUser[]>('/users');
  const emails = tempUsers.map((x) => x.email);

  return !emails.includes(email);
};

const AuthService = {
  login,
  register,
  checkEmailAvailability,
};

export default AuthService;
