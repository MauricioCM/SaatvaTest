import { mount } from "enzyme";
import Products from "../../../components/Products";
import { ProductContext } from "../../../context/ProductContext";



describe('Tests in Product Component', () => {

    const setItems = jest.fn();

    const wrapper = mount(
        <ProductContext.Provider value={{
            setItems
        }}>
            <Products />
        </ProductContext.Provider>
    );

    test('should just to be correctly mounted', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should execute setItems function', () => {
        wrapper.find('button').prop('onClick')();
        expect(setItems).toHaveBeenCalledTimes(1);
    })


})
