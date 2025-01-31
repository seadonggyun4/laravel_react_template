import TanStackQueryProvider from "@/app/store/TanStackQuery";
import {LanguageProvider} from "@/shared/provider/Language";
import {MenuProvider} from "@/shared/provider/SetMenu";
import {DeviceSizeProvider} from "@/shared/provider/DeviceSize";
import {ShowPopUpProvider} from "@/shared/provider/ShowPopUp";

const AppWrapper: React.FC<{ App: React.ElementType; props: any; site: string; }> = ({
    App,
    props,
    site,
}) => {
    return (
        <TanStackQueryProvider>
            <LanguageProvider site={site}>
                <MenuProvider site={site}>
                    <DeviceSizeProvider>
                        <ShowPopUpProvider>
                            <App {...props} />
                        </ShowPopUpProvider>
                    </DeviceSizeProvider>
                </MenuProvider>
            </LanguageProvider>
        </TanStackQueryProvider>
    );
};

export default AppWrapper;
