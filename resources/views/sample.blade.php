@extends('layout')

@section('title', 'サンプル入力')

@section('content')
<section class="p-sample">
    <div class="p-sample__card">
        <h1 class="p-sample__title">サンプル入力</h1>

        <div class="p-sample__block">
            <label class="p-sample__label">元データを貼り付け</label>
            <input
                type="text"
                class="p-sample__input"
                value="25Z-42	サンワ貿易部	安藤様	令和7年12月5日	令和7年12月19日	追加	化学	最終モックアップ	齋藤	TSA Singapore	２０２６春	2200	４５角FL	A	下記	後報	有　前回提出分	１．SZ-8553  5才 	２．SZ-８５５２　　４才	３．SZ-8551  2.5才  	４．SZ-８５５０　　３才	５．SZ8742LT（グリーン）2.5才	6. OZ-8133 白　２.5才	7..SZ-8764 青　１才					阪頭"
            >
        </div>

        <div class="p-sample__grid">
            <div class="p-sample__block">
                <label class="p-sample__label">品番</label>
                <input type="text" class="p-sample__input" placeholder="例: 25Z-42">
            </div>
            <div class="p-sample__block">
                <label class="p-sample__label">現場名</label>
                <input type="text" class="p-sample__input" placeholder="例: サンワ貿易部">
            </div>
            <div class="p-sample__block">
                <label class="p-sample__label">納期</label>
                <input type="text" class="p-sample__input" placeholder="例: 令和7年12月19日">
            </div>
            <div class="p-sample__block">
                <label class="p-sample__label">内容</label>
                <input type="text" class="p-sample__input" placeholder="例: 最終モックアップ">
            </div>
        </div>

        <div class="p-sample__list">
            <div class="p-sample__label-row">
                <span class="p-sample__label">内容リスト（11枠）</span>
            </div>
            <div class="p-sample__rows">
                @for ($i = 1; $i <= 11; $i++)
                    <div class="p-sample__row">
                        <span class="p-sample__row-num">{{ $i }}.</span>
                        <input type="text" class="p-sample__input" placeholder="内容 {{ $i }}">
                    </div>
                @endfor
            </div>
        </div>
    </div>
</section>

<style>
    .p-sample {
        min-height: 100vh;
        background: #f7f9fb;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 48px 16px;
        font-family: "Noto Sans JP", system-ui, -apple-system, sans-serif;
    }
    .p-sample__card {
        width: min(1080px, 100%);
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        box-shadow: 0 18px 40px rgba(17, 24, 39, 0.08);
        padding: 28px;
    }
    .p-sample__title {
        margin: 0 0 20px;
        font-size: 22px;
        font-weight: 700;
        color: #111827;
        text-align: center;
    }
    .p-sample__block {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 16px;
    }
    .p-sample__label {
        font-size: 14px;
        color: #4b5563;
        font-weight: 600;
    }
    .p-sample__input {
        width: 100%;
        height: 44px;
        padding: 0 12px;
        border: 1px solid #d1d5db;
        border-radius: 10px;
        background: #fff;
        font-size: 14px;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
    .p-sample__input:focus {
        outline: none;
        border-color: #60a5fa;
        box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.25);
    }
    .p-sample__grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 16px;
        margin: 4px 0 16px;
    }
    .p-sample__list {
        background: #f9fafb;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        padding: 14px;
    }
    .p-sample__label-row {
        margin-bottom: 10px;
    }
    .p-sample__rows {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .p-sample__row {
        display: grid;
        grid-template-columns: 32px 1fr;
        align-items: center;
        gap: 8px;
    }
    .p-sample__row-num {
        font-weight: 700;
        color: #6b7280;
    }
    @media (max-width: 600px) {
        .p-sample__card {
            padding: 22px;
        }
        .p-sample__row {
            grid-template-columns: 28px 1fr;
        }
    }
</style>
@endsection
