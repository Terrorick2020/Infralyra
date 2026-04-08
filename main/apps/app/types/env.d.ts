declare namespace NodeJS {
    interface ProcessEnv {
        MODE: 'dev' | 'test' | 'prod'
    }
}
