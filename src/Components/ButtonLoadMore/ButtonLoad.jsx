import { Button } from "./ButtonLoad.styled";

export default function ButtonLoadMore({loadMore}) {
    
    return (
        <Button type='button'
            onClick={loadMore}>
            Load more
        </Button>
    )
}
