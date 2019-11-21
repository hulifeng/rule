<?php
function route_class()
{
    return str_replace('.', '-', Route::currentRouteName());
}

/**
 * @param $divisor 除数
 * @param $dividend 被除数
 * @param bool $flag
 */
function conversion_number($divisor, $dividend, $flag = true)
{
    // 如果被除数为 0，直接返回 0
    if ($dividend == 0) return 0;

    if ($flag) {
        return sprintf('%.2f', $divisor / $dividend * 100) . '%';
    } else {
        return sprintf('%.2f', $divisor / $dividend * 100);
    }
}

/**
 * 公共条件
 * @param $condition
 * @param $excute
 * @param $val1
 * @param string $val2
 * @return int
 */
function common_condition($condition, $excute, $val1, $val2 = '')
{
    if ($condition == 1) {
        // 大于
        if ($excute > $val1) {
            $flag = 1;
            return $flag;
        }
    } else if ($condition == 2) {
        // 小于
        if ($excute < $val1) {
            $flag = 1;
            return $flag;
        }
    } else if ($condition == 3) {
        // 介于
        if ($excute > $val1 && $excute < $val2) {
            $flag = 1;
            return $flag;
        }
    }
}

/**
 * @param $rule 规则
 */
function delivery_plan($rule)
{
    $excuteItem = $rule->excute_item; // 项
    $excuteAction = $rule->excute_action; // 动作
    $excuteVal = $rule->excute_val; // 值
    $excuteValType = $rule->excute_val_type; // 执行操作项值
    $excuteSwtich = $rule->excute_switch; // 开关
    $frequency = $rule->frequency; // 频次
    $frequencyType = $rule->frequencyType; // 频次类型
    $uppperLimit = $rule->upper_limit; // 执行上限
    $lowerLimit = $rule->lower_limit; // 执行下限
    if ($excuteItem == 1) {
        // 预算
        if ($excuteAction == 1) {
            // 调整至

        } else if ($excuteAction == 2) {
            // 提高至

        } else if ($excuteAction == 3) {
            // 降低至

        }
    } else if ($excuteItem == 2) {
        // 出价

    } else if ($excuteItem == 3) {
        // 开关
        if ($excuteSwtich == 0) {
            // 暂停计划
            $enable = false;
        } else if ($excuteSwtich == 1) {
            // 开启计划
            $enable = true;
        }
    } else if ($excuteItem == 4) {
        // 仅发送通知
    }
}

/**
 * 创建唯一的 acid
 * @return string
 */
function make_grid()
{
    $charid = md5(uniqid(mt_rand(), true));
    $guid = substr($charid, 0, 8) . substr($charid, 8, 4) . substr($charid, 12, 4);
    return $guid;
}