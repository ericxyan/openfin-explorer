interface PageContainerProps { data: any; }

interface SideNavProps { data: any; }

interface PageHeaderProps {
    header: string;
    sectionIcon: string;
    subHeader: string;
    description: string;
}

interface PageSectionData {
    header: string;
    subHeader: string;
    subSections: Array<any>;
}

interface PageSectionProps { data: PageSectionData; }

interface PageSectionState { showContent: boolean; inputValue: string; }

interface PageComponentData {
    header: string;
    sectionIcon: string;
    subHeader: string;
    description: string;
    sections: Array<any>;
}

interface PageComponentProps { data: PageComponentData; }

interface ChildState {
    code: any;
    headline: string;
    description: string;
}

interface ShortcutsSectionState {
    desktop: boolean;
    startMenu: boolean;
    systemStartup: boolean;
}

interface ShortcutsSectionProps {}

interface WindowOptionsState {
    childFrame: boolean;
    childDefaultWidth: number;
    childDefaultHeight: number;
    childSaveState: boolean;
}

interface WindowOptionsProps {}

interface CodeWithInputUpdateDomProps {
    defaultValue: string;
    content: string;
    myKey: number;
    inputLabel: string;
}

interface CodeWithInputUpdateDomState {
    inputValue: string;
}
