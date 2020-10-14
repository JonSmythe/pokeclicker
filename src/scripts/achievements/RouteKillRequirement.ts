///<reference path="Requirement.ts"/>

class RouteKillRequirement extends Requirement {
    public route: number;
    public region: GameConstants.Region;

    constructor(value: number, route: number, region: GameConstants.Region, type: GameConstants.AchievementOption = GameConstants.AchievementOption.more) {
        super(value, type);
        this.route = route;
        this.region = region;
    }

    public getProgress() {
        return Math.min(App.game.statistics.routeKills[Routes.normalizedNumber(this.region, this.route)](), this.requiredValue);
    }

    public hint(): string {
        if (this.requiredValue != GameConstants.ROUTE_KILLS_NEEDED) {
            return `${this.requiredValue} Pokémon need to be defeated on Route ${this.route}.`;
        } else {
            return `Route ${this.route} still needs to be completed.`;
        }
    }
}