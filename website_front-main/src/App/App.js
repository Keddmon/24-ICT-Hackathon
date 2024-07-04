/* 사용자가 만든 페이지 불러오기 */
import { MainLayout } from '../Layout';
import Router from '../routes';

/* 최상위 페이지 */
const App = () => {
    return (
        <MainLayout>
        
        <Router />
        </MainLayout>
    )
}

/* App/index.js에서 import하기 위한 설정 */
export default App;