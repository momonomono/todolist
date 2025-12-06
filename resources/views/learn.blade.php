@extends('layout')

@section('title', 'データ登録')

@section('content')
<section class="c-register">
    <div class="c-register__inner">
        <h1 class="c-register__title">データ登録</h1>
        <form class="c-register__form">
            <div class="c-register__grid">
                @for ($i = 1; $i <= 6; $i++)
                    <div class="c-register__row">
                        <label class="c-register__label">顔料{{ $i }}</label>
                        <input type="text" name="pigments[{{ $i }}][name]" class="c-register__input" placeholder="顔料名">
                        <input type="number" step="0.01" name="pigments[{{ $i }}][gram]" class="c-register__input" placeholder="グラム数">
                    </div>
                @endfor
            </div>
            <div class="c-register__munsell">
                <label class="c-register__label">マンセル値</label>
                <input type="text" name="munsell" class="c-register__input c-register__input--wide" placeholder="例: 5R 4/14">
            </div>
            <div class="c-register__actions">
                <button type="submit" class="c-register__button">登録する</button>
            </div>
        </form>
    </div>
</section>

<style>
    .c-register {
        background: #f8f9fb;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 48px 16px;
        font-family: "Noto Sans JP", system-ui, -apple-system, sans-serif;
    }
    .c-register__inner {
        width: min(960px, 100%);
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        box-shadow: 0 20px 50px rgba(17, 24, 39, 0.07);
        padding: 32px;
    }
    .c-register__title {
        margin: 0 0 24px;
        font-size: 24px;
        color: #111827;
        font-weight: 700;
        text-align: center;
    }
    .c-register__form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .c-register__grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 16px;
    }
    .c-register__row {
        background: #fdfdfd;
        border: 1px solid #eef1f5;
        border-radius: 12px;
        padding: 16px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
    }
    .c-register__label {
        font-size: 14px;
        color: #4b5563;
        font-weight: 600;
    }
    .c-register__input {
        width: 100%;
        height: 42px;
        padding: 0 12px;
        border: 1px solid #d1d5db;
        border-radius: 8px;
        background: #fff;
        font-size: 14px;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
    .c-register__input:focus {
        outline: none;
        border-color: #60a5fa;
        box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.25);
    }
    .c-register__input--wide {
        max-width: 320px;
    }
    .c-register__munsell {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .c-register__actions {
        display: flex;
        justify-content: center;
        margin-top: 8px;
    }
    .c-register__button {
        min-width: 160px;
        padding: 12px 20px;
        background: #111827;
        color: #fff;
        border: none;
        border-radius: 10px;
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;
        transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease;
        box-shadow: 0 10px 25px rgba(17, 24, 39, 0.15);
    }
    .c-register__button:hover {
        background: #0b1222;
        transform: translateY(-1px);
        box-shadow: 0 12px 28px rgba(17, 24, 39, 0.18);
    }
    .c-register__button:active {
        transform: translateY(0);
        box-shadow: 0 8px 18px rgba(17, 24, 39, 0.12);
    }
    @media (max-width: 600px) {
        .c-register__inner {
            padding: 24px;
        }
        .c-register__grid {
            grid-template-columns: 1fr;
        }
        .c-register__row {
            padding: 14px;
        }
    }
</style>
@endsection
