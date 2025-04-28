import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "sonner";



const CommonLayout = ({children}:{children:React.ReactNode}) => {
            return (
                        <>
                                 <Navbar></Navbar> 
                                 <Toaster richColors position="top-center" />  
                          <main className="min-h-screen"> 
                                     {children}  
                          </main>
                            <Footer></Footer>      
                        </>
            );
};

export default  CommonLayout;