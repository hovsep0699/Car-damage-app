

interface PluginOptions {
    selector: string;
    options: {
        initializedOptions?: string[];
        onPositionChange?: (positions: string[]) => void;
        onComplete?: (positions: string[]) => void;
        onInit?: () => void;
    };
}
interface MyApp
{
    init: (options: PluginOptions)=> void;
}

interface Window {
    DAMAGE_SELECTOR_API: MyApp;
}
