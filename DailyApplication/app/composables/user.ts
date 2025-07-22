import type {User} from '@prisma/client';
import type { TableOptions } from '~/shared/types/dataTableOptions';

export const useFetchUsers = async(options: Ref<TableOptions>) => {
    //読み込み中
    const isLoading = ref<boolean>(false);
    //該当ページの戻り値
    const items = ref<User[]>();
    //全体件数
    const itemsLength = ref<number>(0);
    //検索の実行
    const refresh = async() => {
        //引数optionsの値を利用する
        const opts = toValue(options);
        const offset = (opts.page - 1) * 10;
        const results = [
            ...Array(opts.itemPerPage).keys().map((i) => {
                return{
                    name: `Test${i + offset}`,
                    email: `test+${i + offset}@wardish`,
                    id: i + offset,
                    age: 20 + i,
                    type:'',
                    gender:null,
                    address:null,
                };
            }),
        ];
        items.value = results;
        itemsLength.value = 100;
    };

    //refreshの中で参照しているRefな値が更新されたら本処理を実行する
    watchEffect(async() => {
        isLoading.value = true;
        await refresh();
        isLoading.value = false;
    });

    return{
        isLoading,
        items,
        itemsLength,
        refresh,
    };
};