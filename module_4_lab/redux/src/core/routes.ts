import { generatePath } from "react-router";

interface SwitchRoutes {
    root: string,
    membersTable: string,
    memberCard: string
}

export const switchRoutes: SwitchRoutes = {
    root: "/",
    membersTable: "/members-table",
    memberCard: "/member-card/:login"
};

type NavigationFunction = (login: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'memberCard'> {
    memberCard: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
    ...switchRoutes,
    memberCard: login => generatePath(switchRoutes.memberCard , {login}),
};