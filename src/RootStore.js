import axios from "axios"
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
            var dt = new Date();
            var utcDate = dt.toUTCString();
            self.products.push(Product.create(
                {
                    id: utcDate,
                    title:'mock product',
                    descr: 'this is description',
                    priceFrom: '123$'
                }));
        }
        function addProductsFromResponse(jsonStr) {
            console.log('adding products from response', jsonStr);
            var productArray = JSON.parse(jsonStr);
            productArray.map(jsPr => {
                self.products.push(Product.create({
                    id: jsPr.code,
                    title: jsPr.title,
                    descr: jsPr.shortDescription,
                    priceFrom: jsPr.priceFromFormatted,
                    photoUrl: jsPr.photoUrl,
                    bokunId: jsPr.bokunId
                }));
            });
        }
        function getProduct(index) {
            console.log('will get product', index);
        }

        function setProductImported(viatorId, bokunId) {
            console.log('will set product inmported for viator id', viatorId);
            self.products.find(p => p.id === viatorId).bokunId = bokunId;
        }




        return {setLoading, addProduct, addProductsFromResponse, setProductImported}
    })
    .actions(self => {

        function addProducts() {
            self.setLoading(true);

            // var headers = {
            //     'Content-Type': 'application/json',
            //     'X-Bokun-AccessKey': '40bfeda5aa044fb4937478f5f49bc8b5'
            // }
            // axios.post('http://localhost:9000/activity.json/search',
            // '{"participants":1,"endDate":"2018-10-16","startDate":"2018-10-20"}',
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

                // let jsonStr = '[{"code":"5010SYDNEY","title":"Big Bus Sydney and Bondi Hop-on Hop-off Tour","shortDescription":"Explore Sydney and Bondi Beach on this hop-on hop-off sightseeing tour, which takes you by double-decker bus to 34 stops around the city including Sydney Opera House, Sydney Harbour Bridge, Darling Harbour, Bondi Beach and more. Enjoy unobstructed views and recorded commentary on board. Simply hop off to walk around and sightsee in depth. Your ticket is valid for 24 or 48 hours, so you can experience Sydney and Bondi\'s most noteworthy attractions, sights, and shopping and dining areas at your own pace.","priceFromFormatted":"€31,02","photoUrl":"http://cache-graphicslib.viator.com/graphicslib/5010/SITours/big-bus-sydney-and-bondi-hop-on-hop-off-tour-in-sydney-524174.jpg"}]'
                let jsonStr = '[{"code":"5010SYDNEY","title":"Big Bus Sydney and Bondi Hop-on Hop-off Tour","shortDescription":"Explore Sydney and Bondi Beach on this hop-on hop-off sightseeing tour, which takes you by double-decker bus to 34 stops around the city including Sydney Opera House, Sydney Harbour Bridge, Darling Harbour, Bondi Beach and more. Enjoy unobstructed views and recorded commentary on board. Simply hop off to walk around and sightsee in depth. Your ticket is valid for 24 or 48 hours, so you can experience Sydney and Bondi\'s most noteworthy attractions, sights, and shopping and dining areas at your own pace.","priceFromFormatted":"€31,02","photoUrl":"http://cache-graphicslib.viator.com/graphicslib/5010/SITours/big-bus-sydney-and-bondi-hop-on-hop-off-tour-in-sydney-524174.jpg"},{"code":"5010MELB","title":"Melbourne Tour around center","shortDescription":"Great tour in melbourne. Great tour in melbourne. Great tour in melbourne. Great tour in melbourne. ","priceFromFormatted":"€131,02","photoUrl":"http://cache-graphicslib.viator.com/graphicslib/5010/SITours/big-bus-sydney-and-bondi-hop-on-hop-off-tour-in-sydney-524174.jpg","bokunId":2733},{"code":"NIDA13134","title":"Day Tour to Curonian Spit a Treasure on the Baltic Sea","shortDescription":"enefit from personalized attention and a flexible itinerary on this private tour on to Curonian Spit. This comprehensive full-day tour is ambitious in scope, with many stops, and may be difficult to undertake on your own. But booking this excursion means all the details are arranged for you. Visit UNSECO World Heritage Sites such as Parnidzio Dune, Witch Mountain, and Juodkrante, among others. Along the way, learn about the area\'s history and culture through commentary tailored to your interests.","priceFromFormatted":"€112","photoUrl":"https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/39534/SITours/day-tour-to-curonian-spit-a-treasure-on-the-baltic-sea-in-klaip-da-354353.jpg"}]';

                self.addProductsFromResponse(jsonStr);
                self.setLoading(false);
            }, millisecondsToWait);


        }

        function importProduct(viatorId) {
            console.log('importing product!', viatorId);

            var millisecondsToWait = 1000;
            setTimeout(function() {

                let bokunId = 111;
                console.log('imported! will set bokun id to: ', bokunId);
                self.setProductImported(viatorId, bokunId);

            }, millisecondsToWait);

        }

        return {addProducts, importProduct}
    });


export const storex = RootStore.create();

onSnapshot(storex, callback => {
    console.log('on snapshot', storex.isFetchInProgress, storex.products);

});