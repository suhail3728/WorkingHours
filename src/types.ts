// src/types/navigation.ts
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type AppScreens = {
  WelcomeScreen:undefined;
  NewUser: undefined;
  UserCreation1:undefined;
  UserCreation2:{ selectedPosition: PositionType | null };
  UserCreation3:{name:string, business: string, mobileNumber?:string, selectedPosition: PositionType|null};
  UserCreation4:{name:string, business: string, mobileNumber?:string, selectedPosition: PositionType|null, address:string, businessType:string,selectedNumOfEmployees:string}
  
  SignIn: {email: null};
  SignUp: undefined;
  Home: { userId: string | null };
  Shifts: undefined;
  Chat:undefined;
  Option:undefined;
};
 export  type PositionType = 'Manager' | 'Owner/Operator' | 'Employee' | 'Other';


export type HomeScreenNavigationProp = StackNavigationProp<AppScreens, 'Home'>;
export type HomeScreenRouteProp = RouteProp<AppScreens, 'Home'>;
export type UserCreation2RouteProp = RouteProp<AppScreens, 'UserCreation2'>;
export type UserCreation3RouteProp = RouteProp<AppScreens, 'UserCreation3'>;
export type UserCreation4RouteProp = RouteProp<AppScreens, 'UserCreation4'>;


export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

export type SignInScreenNavigationProp = StackNavigationProp<AppScreens, 'SignIn'>;
export type SignUpScreenNavigationProp = StackNavigationProp<AppScreens, 'SignUp'>;
export type WelcomeScreenNavigationProp = StackNavigationProp<AppScreens, 'WelcomeScreen'>;
export type NewUserNavigationProp = StackNavigationProp<AppScreens, 'WelcomeScreen'>;
export type UserCreation1NavigationProp = StackNavigationProp<AppScreens, 'UserCreation1'>;
export type UserCreation2NavigationProp = StackNavigationProp<AppScreens, 'UserCreation2'>;
export type UserCreation3NavigationProp = StackNavigationProp<AppScreens, 'UserCreation3'>;
export type UserCreation4NavigationProp = StackNavigationProp<AppScreens, 'UserCreation4'>;

export type WelcomeScreenProps = {
  navigation: WelcomeScreenNavigationProp;
};
export type NewUserProps = {
  navigation: WelcomeScreenNavigationProp;
};
export type UserCreation1Props = {
     navigation: UserCreation1NavigationProp;
     };
 export type UserCreation2Props = {
  route:UserCreation2RouteProp;
      navigation: UserCreation2NavigationProp;
      };
      export type UserCreation3Props = {
        route:UserCreation3RouteProp;
            navigation: UserCreation3NavigationProp;
            };
            export type UserCreation4Props = {
              route:UserCreation4RouteProp;
                  navigation: UserCreation4NavigationProp;
                  };

export type SignInScreenProps = {
  navigation: SignInScreenNavigationProp;
};

export type SignUpScreenProps = {
  navigation: SignUpScreenNavigationProp;
};



//user screens navigation 
export type ShiftsNavigationProp = StackNavigationProp<AppScreens, 'Shifts'>;
export type ShiftsProps = {
  navigation: ShiftsNavigationProp;
};















// import { StackNavigationProp } from '@react-navigation/stack';
// import { RouteProp } from '@react-navigation/native';



// export type AppScreens = {
//     Welcome: undefined;
//     NewUser: undefined;
//     Home: undefined;
//     UserCreation1:undefined;
//     UserCreation2:{ selectedPosition: PositionType | null };
//     UserCreation3:{name:string, business: string, mobileNumber?:string, selectedPosition: PositionType|null};
//     UserCreation4:{name:string, business: string, mobileNumber?:string, selectedPosition: PositionType|null, adress:string, businessType:string,selectedNumOfEmployees:string}  
//     WelcomeMessage:{userId: string};
//     Dashboard:undefined;

//   CrudOperations: undefined;
//   };
// export  type PositionType = 'Manager' | 'Owner/Operator' | 'Employee' | 'Other';

// export type UserCreation2RouteProp = RouteProp<AppScreens, 'UserCreation2'>;
// export type UserCreation3RouteProp = RouteProp<AppScreens, 'UserCreation3'>;
// export type UserCreation4RouteProp = RouteProp<AppScreens, 'UserCreation4'>;
// export type WelcomeMessageRouteProp = RouteProp<AppScreens, 'WelcomeMessage'>;
// export type DashboardRouteProp = RouteProp<AppScreens, 'Dashboard'>;



// export type WelcomeScreenNavigationProp = StackNavigationProp<AppScreens, 'Welcome'>;
// export type HomeScreenNavigationProp = StackNavigationProp<AppScreens, 'Home'>;
// export type NewUserNavigationProp = StackNavigationProp<AppScreens, 'NewUser'>;
// export type UserCreation1Prop = StackNavigationProp<AppScreens, 'UserCreation1'>;
// export type UserCreation2Prop = StackNavigationProp<AppScreens, 'UserCreation2'>;

// export type WelcomeMessageProp = StackNavigationProp<AppScreens, 'WelcomeMessage'>;


// export type UserCreation3Prop = StackNavigationProp<AppScreens, 'UserCreation3'>;
// export type UserCreation4Prop = StackNavigationProp<AppScreens, 'UserCreation4'>;
// export type DashboardProp = StackNavigationProp<AppScreens, 'Dashboard'>;


// export type HomeScreenProps = {
//     navigation: HomeScreenNavigationProp;
//   };

// export type WelcomeScreenProps = {
//     navigation: WelcomeScreenNavigationProp;
//   };
  
//   export type NewUserProps = {
//     navigation: NewUserNavigationProp;
//   };

//   export type UserCreation1Props = {
//     navigation: UserCreation1Prop;
//   };
//   export type UserCreation2Props = {
//     navigation: UserCreation2Prop;
//     route:UserCreation2RouteProp;
//   };
//   export type UserCreation3Props = {
//     navigation: UserCreation3Prop;
//     route: UserCreation3RouteProp;
//   };
//   export type UserCreation4Props = {
//     navigation: UserCreation4Prop;
//     route: UserCreation4RouteProp;
//   };
//   export type WelcomeMessageProps = {
//     route: WelcomeMessageRouteProp;
//     navigation: WelcomeMessageProp;
//   };