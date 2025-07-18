export interface Config {
    readonly API_PORT: number;

    readonly API_PREFIX: string;

    readonly SWAGGER_ENABLE: number;

    readonly JWT_SECRET: string;

    readonly JWT_ISSUER: string;

    readonly HEALTH_TOKEN: string;

    readonly DATABASE_URL: string;

    readonly SUPABASE_URL: string;

    readonly SUPABASE_KEY: string;

    readonly PASSENGERS_ALLOWED: string;
}
