check_str = "fsdfdsfabghabcuiui"
tgt_str = "abc"
match_str = ""
for base_char_idx in range(0, len(check_str)):
    check_pos = 0
    while check_pos <= len(tgt_str) - 1:
        check_str_char = check_str[base_char_idx + check_pos]
        tgt_str_char = tgt_str[check_pos]
        if tgt_str_char != check_str_char:
            # Shouldnt continue the while loop, need to reset
            match_str = ""
            break
        if tgt_str_char == check_str_char:
            match_str += check_str_char
            check_pos += 1
    if match_str == tgt_str:
        return True
