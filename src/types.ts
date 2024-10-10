// src/types/navigation.ts
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type AppScreens = {
  SignIn: undefined;
  SignUp: undefined;
  Home: { userId: string | null };
};

export type HomeScreenNavigationProp = StackNavigationProp<AppScreens, 'Home'>;
export type HomeScreenRouteProp = RouteProp<AppScreens, 'Home'>;

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

export type SignInScreenNavigationProp = StackNavigationProp<AppScreens, 'SignIn'>;
export type SignUpScreenNavigationProp = StackNavigationProp<AppScreens, 'SignUp'>;

export type SignInScreenProps = {
  navigation: SignInScreenNavigationProp;
};

export type SignUpScreenProps = {
  navigation: SignUpScreenNavigationProp;
};