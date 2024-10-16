import { Sidebar, TopMenu } from "@/components";


export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/*<Sidebar /> */}
            <Sidebar />
            {/* Fin del <Sidebar /> */}


            {/* Main Layout content - Contenido principal del Layout */}
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">

                {/*<TopMenu /> */}
                <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
                    <TopMenu />
                </div>
                {/*Fin del <TopMenu /> */}
                {/* TODO: Contenido en el Layout.tsx */}
                <div className="px-6 pt-6 bg-white p-2 m-2 pb-5 rounded">
                    {/* TODO: dashboard/page.tsx  */}
                    {/* Este contenido va dentro de page.tsx */}
                    {children}
                    {/* TODO: fin del dashboard/page.tsx  */}
                    {/* TODO: Fin del contenido en el Layout.tsx */}
                </div>
            </div>
        </>
    );
}