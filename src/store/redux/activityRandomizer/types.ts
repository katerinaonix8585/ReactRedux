export interface ActivityInfo {
    id: string,
    activity: string    
}

export interface ActivityRandomizerSliceState {
    data: ActivityInfo[],
    status: 'default' | 'loading' | 'success' | 'error'
    error: any ,
    isLoading: boolean
}

