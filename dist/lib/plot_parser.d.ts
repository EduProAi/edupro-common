type ParsedPlot = {
    plot: string;
    uuid: string;
    editable?: boolean;
};
export declare class PlotParser {
    static parsePlots(plotString: string): ParsedPlot[];
    static joinPlots(plots: ParsedPlot[]): string;
}
export {};
