@if ($paginator->hasPages())
    <ol>
        {{-- Previous Page Link --}}
        @if ($paginator->onFirstPage())
            <li class="ydc-previous-item">
                <a class="ydc-previous-item-btn-medium ydc-disabled">
                    <span>上一页</span>
                </a>
            </li>
        @else
            <li class="ydc-previous-item">
                <a href="{{ $paginator->previousPageUrl() }}" class="ydc-previous-item-btn-medium">
                    <span>上一页</span>
                </a>
            </li>
        @endif

        {{-- Pagination Elements --}}
        @foreach ($elements as $element)
            {{-- "Three Dots" Separator --}}
            @if (is_string($element))
                <li class="page-item disabled" aria-disabled="true"><span class="page-link">{{ $element }}</span></li>
            @endif

            {{-- Array Of Links --}}
            @if (is_array($element))
                @foreach ($element as $page => $url)
                    @if ($page == $paginator->currentPage())
                        <li>
                            <a class="ydc-previous-item-btn-medium cur">{{ $page }}</a>
                        </li>
                    @else
                        <li>
                            <a href="{{ $url }}" class="ydc-previous-item-btn-medium">{{ $page }}</a>
                        </li>
                    @endif
                @endforeach
            @endif
        @endforeach

        {{-- Next Page Link --}}
        @if ($paginator->hasMorePages())
            <li class="ydc-previous-item">
                <a href="{{ $paginator->nextPageUrl() }}" class="ydc-previous-item-btn-medium">
                    <span>下一页</span>
                </a>
            </li>
        @else
            <li class="ydc-previous-item">
                <a class="ydc-previous-item-btn-medium ydc-disabled">
                    <span>下一页</span>
                </a>
            </li>
        @endif
    </ol>
@endif
