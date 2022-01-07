import { mount } from "enzyme";
import Header from "../../../components/Header";
import { ProductContext } from "../../../context/ProductContext";

describe('Tests in Header Component', () => {
    const items = 1;
    const wrapper = mount(
        <ProductContext.Provider value={{
            items
        }}>
            <Header />
        </ProductContext.Provider>
    );

    test('should just to be correctly mounted', () => {
        expect(wrapper).toMatchSnapshot();
    });

})
