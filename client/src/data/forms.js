export const walletSetting = {
    type: "form",
    standard: "Standard",
    title: "Update Profile",
    warning: "Update your ",
    description: "lets resolve it here",
    warningLink: {
      text: "profile image",
      to: "/xln/wallet/file-upload",
      icon: "",
      show: true,
      external: false,
    },
    image: null,
    formData: {
      action: "updateProfile",
      method: "post",
      submit: {
        label: "Update Profile",
        className: "btn btn-block btn-info",
        icon: "",
        action: () => {},
      },
      fields: [
        {
          type: "input",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Update First Name",
              forId: "firstname",
            },
            input: {
              type: "text",
              id: "firstname",
              className: "line_bottom",
              name: "firstname",
              onChange: "",
              placeholder: "Update First Name",
            },
            aria: {},
          },
        },
        {
          type: "input",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Update Last Name",
              forId: "lastname",
            },
            input: {
              type: "text",
              id: "lastname",
              className: "line_bottom",
              name: "lastname",
              onChange: "",
              placeholder: "Update Last Name",
            },
            aria: {},
          },
        },
        {
          type: "input",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Update Username",
              forId: "username",
            },
            input: {
              type: "text",
              id: "username",
              className: "line_bottom",
              name: "username",
              onChange: "",
              placeholder: "Update Username",
            },
            aria: {},
          },
        },
        {
          type: "input",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Add Website",
              forId: "website",
            },
            input: {
              type: "text",
              id: "website",
              className: "line_bottom",
              name: "website",
              onChange: "",
              placeholder: "Add Website Url",
            },
            aria: {},
          },
        },
        {
          type: "input",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Add Twitter",
              forId: "twitter",
            },
            input: {
              type: "text",
              id: "twitter",
              className: "line_bottom",
              name: "twitter",
              onChange: "",
              placeholder: "Add Twitter Url",
            },
            aria: {},
          },
        },
        {
          type: "input",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Add Instagram",
              forId: "instagram",
            },
            input: {
              type: "text",
              id: "instagram",
              className: "line_bottom",
              name: "instagram",
              onChange: "",
              placeholder: "Add Instagram Url",
            },
            aria: {},
          },
        },
        {
          type: "input",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Add Facebook",
              forId: "facebook",
            },
            input: {
              type: "text",
              id: "facebook",
              className: "line_bottom",
              name: "facebook",
              onChange: "",
              placeholder: "Add Facebook Url",
            },
            aria: {},
          },
        },
      ],
    },
  }

  export const walletPermission = {
    type: "form",
    standard: "Standard",
    title: "Edit Permissions",
    warning: "Update your ",
    description: "lets resolve it here",
    warningLink: {
      text: "profile image",
      to: "/xln/wallet/file-upload",
      icon: "",
      show: true,
      external: false,
    },
    image: null,
    formData: {
      action: "setPermissions",
      method: "post",
      submit: {
        label: "Set Permissions",
        className: "btn btn-block btn-info",
        icon: "",
        action: () => {},
      },
      fields: [
        {
          type: "input",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Update First Name",
              forId: "firstname",
            },
            input: {
              type: "text",
              id: "firstname",
              className: "line_bottom",
              name: "firstname",
              onChange: "",
              placeholder: "Update First Name",
            },
            aria: {},
          },
        },
        {
          type: "input",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Update Last Name",
              forId: "lastname",
            },
            input: {
              type: "text",
              id: "lastname",
              className: "line_bottom",
              name: "lastname",
              onChange: "",
              placeholder: "Update Last Name",
            },
            aria: {},
          },
        },
        {
          type: "input",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Update Username",
              forId: "username",
            },
            input: {
              type: "text",
              id: "username",
              className: "line_bottom",
              name: "username",
              onChange: "",
              placeholder: "Update Username",
            },
            aria: {},
          },
        },
        {
          type: "input",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Add Website",
              forId: "website",
            },
            input: {
              type: "text",
              id: "website",
              className: "line_bottom",
              name: "website",
              onChange: "",
              placeholder: "Add Website Url",
            },
            aria: {},
          },
        },
        {
          type: "input",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Add Twitter",
              forId: "twitter",
            },
            input: {
              type: "text",
              id: "twitter",
              className: "line_bottom",
              name: "twitter",
              onChange: "",
              placeholder: "Add Twitter Url",
            },
            aria: {},
          },
        },
        {
          type: "input",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Add Instagram",
              forId: "instagram",
            },
            input: {
              type: "text",
              id: "instagram",
              className: "line_bottom",
              name: "instagram",
              onChange: "",
              placeholder: "Add Instagram Url",
            },
            aria: {},
          },
        },
        {
          type: "input",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Add Facebook",
              forId: "facebook",
            },
            input: {
              type: "text",
              id: "facebook",
              className: "line_bottom",
              name: "facebook",
              onChange: "",
              placeholder: "Add Facebook Url",
            },
            aria: {},
          },
        },
      ],
    },
  }

  export const walletCredential =  {
    type: "form",
    standard: "Standard",
    title: "Asset Credentials",
    warning: "Update your ",
    description: "lets resolve it here",
    warningLink: {
      text: "profile image",
      to: "/xln/wallet/file-upload",
      icon: "",
      show: true,
      external: false,
    },
    image: null,
    formData: {
      action: "setCredentials",
      method: "post",
      submit: {
        label: "Set Credentials",
        className: "btn btn-block btn-info",
        icon: "",
        action: () => {},
      },
      fields: [
        {
          type: "input",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Update First Name",
              forId: "firstname",
            },
            input: {
              type: "text",
              id: "firstname",
              className: "line_bottom",
              name: "firstname",
              onChange: "",
              placeholder: "Update First Name",
            },
            aria: {},
          },
        },
        {
          type: "input",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Update Last Name",
              forId: "lastname",
            },
            input: {
              type: "text",
              id: "lastname",
              className: "line_bottom",
              name: "lastname",
              onChange: "",
              placeholder: "Update Last Name",
            },
            aria: {},
          },
        },
        {
          type: "input",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Update Username",
              forId: "username",
            },
            input: {
              type: "text",
              id: "username",
              className: "line_bottom",
              name: "username",
              onChange: "",
              placeholder: "Update Username",
            },
            aria: {},
          },
        },
        {
          type: "input",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Add Website",
              forId: "website",
            },
            input: {
              type: "text",
              id: "website",
              className: "line_bottom",
              name: "website",
              onChange: "",
              placeholder: "Add Website Url",
            },
            aria: {},
          },
        },
        {
          type: "input",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Add Twitter",
              forId: "twitter",
            },
            input: {
              type: "text",
              id: "twitter",
              className: "line_bottom",
              name: "twitter",
              onChange: "",
              placeholder: "Add Twitter Url",
            },
            aria: {},
          },
        },
        {
          type: "input",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Add Instagram",
              forId: "instagram",
            },
            input: {
              type: "text",
              id: "instagram",
              className: "line_bottom",
              name: "instagram",
              onChange: "",
              placeholder: "Add Instagram Url",
            },
            aria: {},
          },
        },
        {
          type: "input",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Add Facebook",
              forId: "facebook",
            },
            input: {
              type: "text",
              id: "facebook",
              className: "line_bottom",
              name: "facebook",
              onChange: "",
              placeholder: "Add Facebook Url",
            },
            aria: {},
          },
        },
      ],
    },
  }

  export const walletFileUpload = {
    type: "form",
    standard: "Standard",
    title: "Change Profile Photos",
    warning: "Update your ",
    description: "lets resolve it here",
    image: null,
    warningLink: {
      text: "profile",
      to: "/xln/setting",
      icon: "",
      show: true,
      external: false,
    },
    formData: {
      action: "uploadFile",
      method: "post",
      submit: {
        label: "Update User Profile",
        className: "btn btn-block btn-primary",
        icon: "",
        action: () => {},
      },
      fields: [
        {
          type: "file",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Upload New Avatar",
              forId: "avatar",
            },
            input: {
              type: "file",
              id: "avatar",
              className: "btn btn-info",
              name: "avatar",
              onChange: "",
              placeholder: "Upload New Avatar",
            },
            aria: {},
          },
        },

        {
          type: "file",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Upload New Cover",
              forId: "cover",
            },
            input: {
              type: "file",
              id: "cover",
              className: "btn btn-info",
              name: "cover",
              onChange: "",
              placeholder: "Upload New Cover",
            },
            aria: {},
          },
        },
      ],
    },
  }