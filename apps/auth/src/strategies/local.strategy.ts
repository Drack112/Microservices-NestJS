import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { UsersService } from '../users/users.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    /*
      Declare the "user" field is the email
    */
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string) {
    return this.usersService.validateUser(email, password);
  }
}
