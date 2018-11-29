import generateRequestPayloadType from '../src/generateRequestPayloadType'

describe('GET', () => {
  test('query', async () => {
    const api: any = {
      _id: 1457,
      method: 'GET',
      catid: 91,
      title: 'get',
      path: '/get',
      project_id: 27,
      res_body_type: 'json',
      uid: 63,
      add_time: 1543248927,
      up_time: 1543326118,
      __v: 0,
      desc: '<p>hello get</p>\n',
      markdown: 'hello get',
      res_body: '{"type":"object","title":"empty object","properties":{}}',
      req_body_type: 'json',
      req_body_other: '{\n  "type": "object",\n  "title": "empty object",\n  "properties": {\n    "field_3": {\n      "type": "string"\n    }\n  }, // fff\n  "required": [\n    "field_3"\n  ]\n}',
      tag: [],
      index: 0,
      api_opened: false,
      res_body_is_json_schema: true,
      req_body_form: [],
      req_body_is_json_schema: false,
      req_params: [],
      req_headers: [
        {
          _id: '5bfd49a6a4a6ea4ee3dcb672',
          value: 'application/json',
          name: 'Content-Type',
          required: '1',
        },
        {
          _id: '5bfd49a6a4a6ea4ee3dcb671',
          desc: 'token',
          example: '00',
          value: '3333',
          name: 'token',
          required: '1',
        },
      ],
      req_query: [
        {
          _id: '5bfd49a6a4a6ea4ee3dcb670',
          desc: 'aa',
          example: 'A',
          name: 'a',
          required: '1',
        },
        {
          _id: '5bfd49a6a4a6ea4ee3dcb66f',
          desc: 'bb',
          example: 'B',
          name: 'b',
          required: '0',
        },
        {
          _id: '5bfd49a6a4a6ea4ee3dcb66e',
          desc: '',
          example: 'C',
          name: 'c',
          required: '1',
        },
        {
          _id: '5bfd49a6a4a6ea4ee3dcb66d',
          desc: 'dd',
          example: '',
          name: 'd',
          required: '0',
        },
      ],
      query_path: {
        path: '/get',
        params: [],
      },
      type: 'static',
      status: 'undone',
      edit_uid: 0,
      username: '方剑成',
    }
    expect(await generateRequestPayloadType(api, 'Test')).toMatchSnapshot()
  })
})

describe('POST', () => {
  test('form', async () => {
    const api: any = {
      _id: 1460,
      method: 'POST',
      catid: 91,
      title: 'post',
      path: '/post',
      project_id: 27,
      res_body_type: 'json',
      uid: 63,
      add_time: 1543250344,
      up_time: 1543328890,
      __v: 0,
      desc: '',
      markdown: '',
      req_body_type: 'form',
      res_body: '',
      req_body_other: '{"type":"object","title":"empty object","properties":{"field_1":{"type":"string"}},"required":["field_1"]}',
      tag: [],
      index: 0,
      api_opened: false,
      res_body_is_json_schema: false,
      req_body_form: [
        {
          _id: '5bfd547aa4a6ea4ee3dcb682',
          desc: 'aaa',
          type: 'text',
          name: 'a',
          required: '1',
        },
        {
          _id: '5bfd547aa4a6ea4ee3dcb681',
          desc: 'bbb',
          example: 'B',
          type: 'text',
          name: 'b',
          required: '0',
        },
      ],
      req_body_is_json_schema: true,
      req_params: [],
      req_headers: [
        {
          _id: '5bfd547aa4a6ea4ee3dcb683',
          value: 'application/x-www-form-urlencoded',
          name: 'Content-Type',
          required: '1',
        },
      ],
      req_query: [],
      query_path: {
        path: '/post',
        params: [],
      },
      type: 'static',
      status: 'undone',
      edit_uid: 0,
      username: '方剑成',
    }
    expect(await generateRequestPayloadType(api, 'Test')).toMatchSnapshot()
  })
  test('form with file', async () => {
    const api: any = {
      _id: 1460,
      method: 'POST',
      catid: 91,
      title: 'post',
      path: '/post',
      project_id: 27,
      res_body_type: 'json',
      uid: 63,
      add_time: 1543250344,
      up_time: 1543511881,
      __v: 0,
      desc: '',
      markdown: '',
      req_body_type: 'form',
      res_body: '{"type":"array","items":{"type":"object","properties":{"a":{"type":"string","description":"aa"},"b":{"type":"array","items":{"type":"number","description":"bbbb"},"description":"bb"},"c":{"type":"object","properties":{"c0":{"type":"string","description":"c000"}},"required":["c0"]}},"required":["a","b","c"]}}',
      req_body_other: 'ffffffffffffffffffffffff',
      tag: [],
      index: 0,
      api_opened: false,
      res_body_is_json_schema: true,
      req_body_form: [
        {
          _id: '5c001f49a4a6ea4ee3dcb6d1',
          desc: 'aaa',
          type: 'text',
          name: 'a',
          required: '1',
        },
        {
          _id: '5c001f49a4a6ea4ee3dcb6d0',
          desc: 'bbb',
          example: 'B',
          type: 'text',
          name: 'b',
          required: '0',
        },
        {
          _id: '5c001f49a4a6ea4ee3dcb6cf',
          desc: '文件',
          example: '',
          type: 'file',
          name: 'f',
          required: '1',
        },
      ],
      req_body_is_json_schema: true,
      req_params: [],
      req_headers: [
        {
          _id: '5c001f49a4a6ea4ee3dcb6ce',
          value: 'multipart/form-data',
          name: 'Content-Type',
          required: '1',
        },
      ],
      req_query: [],
      query_path: {
        path: '/post',
        params: [],
      },
      type: 'static',
      status: 'undone',
      edit_uid: 0,
      username: '方剑成',
    }
    expect(await generateRequestPayloadType(api, 'Test')).toMatchSnapshot()
  })
  test('json', async () => {
    const api: any = {
      _id: 1460,
      method: 'POST',
      catid: 91,
      title: 'post',
      path: '/post',
      project_id: 27,
      res_body_type: 'json',
      uid: 63,
      add_time: 1543250344,
      up_time: 1543329151,
      __v: 0,
      desc: '',
      markdown: '',
      req_body_type: 'json',
      res_body: '',
      req_body_other: '{\n  "a": "a", // aaa,\n  "b": 1,\n  "c": false,\n  "d": [{ "e": 2018 }]\n}',
      tag: [],
      index: 0,
      api_opened: false,
      res_body_is_json_schema: false,
      req_body_form: [
        {
          _id: '5bfd557fa4a6ea4ee3dcb685',
          desc: 'aaa',
          type: 'text',
          name: 'a',
          required: '1',
        },
        {
          _id: '5bfd557fa4a6ea4ee3dcb684',
          desc: 'bbb',
          example: 'B',
          type: 'text',
          name: 'b',
          required: '0',
        },
      ],
      req_body_is_json_schema: false,
      req_params: [],
      req_headers: [
        {
          _id: '5bfd557fa4a6ea4ee3dcb686',
          value: 'application/json',
          name: 'Content-Type',
          required: '1',
        },
      ],
      req_query: [],
      query_path: {
        path: '/post',
        params: [],
      },
      type: 'static',
      status: 'undone',
      edit_uid: 0,
      username: '方剑成',
    }
    expect(await generateRequestPayloadType(api, 'Test')).toMatchSnapshot()
  })
  test('json-schema', async () => {
    const api: any = {
      _id: 1460,
      method: 'POST',
      catid: 91,
      title: 'post',
      path: '/post',
      project_id: 27,
      res_body_type: 'json',
      uid: 63,
      add_time: 1543250344,
      up_time: 1543329802,
      __v: 0,
      desc: '',
      markdown: '',
      req_body_type: 'json',
      res_body: '',
      req_body_other: '{"type":"object","title":"empty object","properties":{"a":{"type":"string","description":"aa"},"b":{"type":"number","description":"bb"},"c":{"type":"array","items":{"type":"integer","description":"cccc"},"description":"cc"},"d":{"type":"object","properties":{"d0":{"type":"string"},"d1":{"type":"boolean","description":"d1d1"},"d2":{"type":"object","properties":{"d2.0":{"type":"string","description":"d2.0"}},"required":["d2.0"]}},"description":"dd","required":["d0","d1","d2"]},"e":{"type":"boolean","description":"ee"}},"required":["a","b","c","d","e"]}',
      tag: [],
      index: 0,
      api_opened: false,
      res_body_is_json_schema: false,
      req_body_form: [
        {
          _id: '5bfd580aa4a6ea4ee3dcb688',
          desc: 'aaa',
          type: 'text',
          name: 'a',
          required: '1',
        },
        {
          _id: '5bfd580aa4a6ea4ee3dcb687',
          desc: 'bbb',
          example: 'B',
          type: 'text',
          name: 'b',
          required: '0',
        },
      ],
      req_body_is_json_schema: true,
      req_params: [],
      req_headers: [
        {
          _id: '5bfd580aa4a6ea4ee3dcb689',
          value: 'application/json',
          name: 'Content-Type',
          required: '1',
        },
      ],
      req_query: [],
      query_path: {
        path: '/post',
        params: [],
      },
      type: 'static',
      status: 'undone',
      edit_uid: 0,
      username: '方剑成',
    }
    expect(await generateRequestPayloadType(api, 'Test')).toMatchSnapshot()
  })
  test('others', async () => {
    const api: any = {
      _id: 1460,
      method: 'POST',
      catid: 91,
      title: 'post',
      path: '/post',
      project_id: 27,
      res_body_type: 'json',
      uid: 63,
      add_time: 1543250344,
      up_time: 1543330004,
      __v: 0,
      desc: '',
      markdown: '',
      req_body_type: 'file',
      res_body: '',
      req_body_other: 'ffffffffffffffffffffffff',
      tag: [],
      index: 0,
      api_opened: false,
      res_body_is_json_schema: false,
      req_body_form: [
        {
          _id: '5bfd58d4a4a6ea4ee3dcb68b',
          desc: 'aaa',
          type: 'text',
          name: 'a',
          required: '1',
        },
        {
          _id: '5bfd58d4a4a6ea4ee3dcb68a',
          desc: 'bbb',
          example: 'B',
          type: 'text',
          name: 'b',
          required: '0',
        },
      ],
      req_body_is_json_schema: true,
      req_params: [],
      req_headers: [],
      req_query: [],
      query_path: {
        path: '/post',
        params: [],
      },
      type: 'static',
      status: 'undone',
      edit_uid: 0,
      username: '方剑成',
    }
    expect(await generateRequestPayloadType(api, 'Test')).toMatchSnapshot()
  })
})
