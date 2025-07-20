import React from 'react';
import { useForm, Resolver, SubmitHandler, DeepPartial, FieldValues } from 'react-hook-form';

type VerticalFromProps<TFormValues extends FieldValues> = {
    defaultValues?: DeepPartial<TFormValues>;
    resolver?: Resolver<TFormValues>;
    children?: React.ReactNode;
    onSubmit: SubmitHandler<TFormValues>;
    formClass?: string;
};

const VerticalForm = <TFormValues extends FieldValues = FieldValues>({
    defaultValues,
    resolver,
    children,
    onSubmit,
    formClass,
}: VerticalFromProps<TFormValues>) => {
    /*
     * form methods
     */
    // @ts-ignore: Type compatibility issue with updated react-hook-form version
    const methods = useForm<TFormValues>({ defaultValues, resolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    return (
        // @ts-ignore: Type compatibility issue with updated react-hook-form version
        <form onSubmit={handleSubmit(onSubmit)} className={formClass} noValidate>
            {Array.isArray(children)
                ? children.map((child) => {
                      return child.props && child.props.name
                          ? React.createElement(child.type, {
                                ...{
                                    ...child.props,
                                    register,
                                    key: child.props.name,
                                    errors,
                                    control,
                                },
                            })
                          : child;
                  })
                : children}
        </form>
    );
};

export default VerticalForm;
