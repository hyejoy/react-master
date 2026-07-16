import { useState } from "react";

export default function HeavyForm() {
  // 거대한 상태 객체 초기화
  // 필드 100개를 가진 객체를 생성 {field_0: '',.....,field_99:''}
  /**
   * Array.from({ length: 100 }, (_, i) => [`field_${i}`, ''])
    // [['field_0', ''], ['field_1', ''], ... ['field_99', '']]

    Object.fromEntries(...)
    // { field_0: '', field_1: '', ... field_99: '' }
   */
  const [formData, setFormData] = useState<Record<string, string>>(
    Object.fromEntries(
      Array.from({ length: 3000 }, (_, i) => [`field_${i}`, ""]),
    ),
  );

  // 성능 저하의 주범: 전개 연산자
  // 글자 하나를 칠 때 마다 기존 100개의 데이터를 복사하여 새로운 객체 생성
  // 100번의 복사 + 100개의 필드 렌더링 검사가 매 타이핑마다 발생
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>제어 컴포넌트 성능 지연 테스트</h1>
      <p>아래 인풋에 빠르게 타이핑 해보세요.</p>

      <form>
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label>{key}</label>
            <input
              name={key}
              value={formData[key]}
              onChange={handleChange}
              placeholder="입력시 지연 발생"
            />
          </div>
        ))}
      </form>
    </div>
  );
}
