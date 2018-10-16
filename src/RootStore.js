import { types, onSnapshot } from "mobx-state-tree"
import { MetaInfo, Product} from "./Models"

export const RootStore = types.model({
    meta:types.optional(types.map(MetaInfo), {}),
    products:types.array(Product),
    isFetchInProgress:false
})
    .actions(self => {
        function setLoading(flag) {

            console.log("setting loading to ", flag);
            self.isFetchInProgress = flag;
        }
        function addProduct() {
            console.log(' will add products');
            self.products.push(Product.create({title:'gaidziugaidys'}));
        }


        return {setLoading, addProduct}
    })
    .actions(self => {

        function addProducts() {
            self.setLoading(true);

            var headers = {
                'Content-Type': 'application/json',
                'X-Bokun-AccessKey': '40bfeda5aa044fb4937478f5f49bc8b5'
            }

            console.log('POSTING data!');

            // axios.post('http://localhost:9000/activity.json/search',
            //     '{"participants":1,"endDate":"2018-10-16","startDate":"2018-10-20"}',
            //     {headers: headers})
            //     .then(json => {
            //         console.log('will log json');
            //         console.log(json);
            //
            //         const p = Product.create({"title":"gaidys"});
            //         self.setLoading(false);
            //         //self.products.set(1, p);
            //
            //
            //     })
            //     .catch(error => {
            //         self.setLoading(false);
            //         console.log('got error from POST', error);
            //     });

            var millisecondsToWait = 1000;
            setTimeout(function() {
                self.addProduct();
                self.setLoading(false);
            }, millisecondsToWait);


        }
        return {addProducts}
    });


export const storex = RootStore.create();

onSnapshot(storex, callback => {
    console.log('on snapshot', storex.isFetchInProgress, storex.products);

});