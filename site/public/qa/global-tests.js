/**
 * Created by simin on 2016/4/30.
 */
suite('Global Tests',function(){
    test('page has a valid title',function(){
        assert(document.title&&document.title.match(/\S/)&&document.title.toUpperCase()!=='TODO');
    });
});