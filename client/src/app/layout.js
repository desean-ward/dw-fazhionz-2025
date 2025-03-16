import "./globals.css";
import Header from "@/components/header/header.component";

import store from "@/redux/store/store";
import ReduxProvider from "@/redux/redux-provider/redux-provider";

export const metadata = {
  title: "D.W. Fazhionz!",
  description: "Modern Apparel for Modern Mindz",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <ReduxProvider store={store}>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
