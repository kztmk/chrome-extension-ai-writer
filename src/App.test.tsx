import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('should first', async () => {
  // Appコンポーネントを描画
  render(<App />); // テキスト「count is」を持っているボタンを検索

  let button = screen.getByRole('button', { name: /count is/i }); // 検索したボタンのテキストが「count is 0」を確認
  expect(button).toHaveTextContent('count is 0'); // イベントを発火するユーザをセット

  const user = userEvent.setup();
  // 上記の検索したボタンをクリック
  await user.click(button); // 再描画されたボタンを取得 取得には正規表現も使えます。
  button = await screen.findByRole('button', { name: /count is \d/ }); // 取得したボタンのテキストを確認
  expect(button).toHaveTextContent('count is 1');
});
