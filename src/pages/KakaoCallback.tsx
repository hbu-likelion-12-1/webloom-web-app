import { useEffect } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthStore } from "@/store/AuthStore";

const KakaoCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setKakaoAuthCode } = useAuthStore();

  useEffect(() => {
    const code = searchParams.get("code");
    const referrer = localStorage.getItem("referrer");
    if (!referrer) return;
    if (code) {
      setKakaoAuthCode(code);
    }
    navigate(referrer);
  }, []);

  return (
    <div>

    </div>
  );
};

export default KakaoCallback;
