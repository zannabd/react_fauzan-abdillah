import { useState } from "react";
import { OpenAI } from "openai";
import { Col, Container, Row } from "react-bootstrap";

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function OpenAi() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: "Memberikan jawaban umum dan spesifik seputar politik indonesia" + prompt,
        max_tokens: 250,
      });
      setResult(response.choices[0].text);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <Container>
      <h2>Hint Prompt : Memberikan jawaban umum dan spesifik seputar politik indonesia</h2>
      <Row className="d-flex align-items-center my-5 ">
        <Col>
          <textarea type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Ketik disini..." className="form-control me-2"></textarea>
        </Col>
        <Col>
          <button onClick={handleClick} disabled={loading || prompt.length === 0} className="btn btn-success">
            {loading ? "Generating..." : "Generate"}
          </button>
        </Col>
      </Row>
      <pre className="results">{result}</pre>
    </Container>
  );
}
