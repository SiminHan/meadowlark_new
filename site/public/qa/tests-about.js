/**
 * Created by simin on 2016/4/30.
 */
suite('"About" page tests',function(){
    test('page should contain link to cotact page',function(){
        assert($('a[href="/contact"]').length);
    });
    test('page should contain link to more page',function(){
        assert($('a[href="/more"]').length);
    });
});