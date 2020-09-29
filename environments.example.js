import Constants from "expo-constants";

const ENV = {
    development: {
        apiUrl: 'https://reqres.in/api',
        usingFakeApi: false,
    },
    staging: {
        apiUrl: '',
        usingFakeApi: true,
    },
    production: {
        apiUrl: '',
        usingFakeApi: true,
    }
};

export function getEnvVars(env = Constants.manifest.releaseChannel) {
    switch (env) {
        case 'development':
            return ENV.development;

        case 'staging':
            return ENV.staging;

        case 'production':
            return ENV.production;

        default:
            return ENV.development;
    }
}
