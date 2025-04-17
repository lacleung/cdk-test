import { StackProps } from "aws-cdk-lib";

export interface IamProps extends StackProps {
    readonly roleName: string;
    readonly description: string;
    readonly servicePrincipal: string;
    readonly policyActions: string[];
}